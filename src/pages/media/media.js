import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import { getBytes } from '../../helpers';
import { API_ROOT } from '../../middleware/api';
import UploadPrewie from '../../components/upload-prewie';
import {
  fetchImages,
  upload,
  deleteImages,
  altImages
} from './services/action';
import { Modal } from '../../components/modal';
import { getImages } from './services/selectors';
// import Files from './files';
// import { getBytes } from '../../../helpers/get-bytes';
import './media.scss';


class Media extends Component {
  state = {
    selected: null,
    isOpen: false,
    index: null,
    copySuccess: ''
  }

  componentDidMount() {
    if (this.props.mediaFiles.length === 0) {
      this.props.fetchImages();
    }
  }

  selected = (selected, index) => {
    this.setState({ selected, isOpen: true, index });
  }

  close = () => {
    this.setState({ isOpen: false, copySuccess: '' });
  }

  upload = ({ target }) => {
    const data = new FormData();
    if (target.files.length > 10) {
      alert('Максимум 10 файлов за 1 раз');
    }
    for (let i = 0; i < target.files.length; i++) {
      data.append('file', target.files[i]);
    }

    this.props.upload(data);
    target.value = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props.mediaFiles) !== JSON.stringify(nextProps.mediaFiles.length)
      ||
      this.state.isOpen !== nextState.isOpen;
  }

  onDelete = () => {
    this.close();
    // console.log(this.state.selected._id);
    this.props.deleteImages(this.state.selected._id);
  }

  setAlt = e => {
    if (e.target.value.length === 0) return;
    this.props.altImages(this.props.mediaFiles[this.state.index]._id, e.target.value);
    e.target.value = null;
  }

  prev = () => this.setState(({ index }) => ({ index: index - 1 }));

  next = () => this.setState(({ index }) => ({ index: index + 1 }));

  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Скопированно!' });
  }

  render() {
    // console.log(this.props.mediaFiles);
    const { selected, index } = this.state;
    const { mediaFiles } = this.props;
    return (
      <div>
        <div className="media__header">
          <label className="button-upload">
            <input
              accept="image/*"
              multiple={true}
              onChange={this.upload}
              type="file"
              style={{display: 'none'}}
            />
            <Icon type="cloud-upload" />Загрузить</label>
        </div>
        <div className="upload-list">
          {
            this.props.mediaFiles.map((file, index) => {
              return (
                <UploadPrewie
                  key={file._id}
                  file={file}
                  index={index}
                  onClick={this.selected}
                />
              );
            })
          }
        </div>
        {
          this.state.isOpen &&
          <Modal
            title="Параметры файлы"
            modalClose={this.close}
            prev={this.prev}
            next={this.next}
            disablePrev={index === 0}
            disableNext={index === mediaFiles.length - 1}
          >
            {
              <div style={{ display: 'flex' }}>
                {
                  this.props.mediaFiles[index].type === 'video/mp4' ?
                    <video controls={true} src={`${API_ROOT}${this.props.mediaFiles[index].path}`} />
                    : <img className="dialog-img" src={`${API_ROOT}${this.props.mediaFiles[index].path}`} alt={mediaFiles[index]} />
                }

                <div className="upload-info">
                  <p>Тип файла: {mediaFiles[index].type}</p>
                  <p>Загружен: {new Date(mediaFiles[index].createdAt).toLocaleString()}</p>
                  <p>Размер файла: {getBytes(mediaFiles[index].size)}</p>
                  <p onClick={this.copyToClipboard}>Копировать ссылку <input ref={textarea => this.textArea = textarea} type="text" value={`${API_ROOT}${this.props.mediaFiles[index].path}`} readOnly={true}/></p>
                  <p>{this.state.copySuccess}</p>
                  <Button onClick={this.onDelete} type="danger" icon="delete">Удалить</Button>
                </div>
              </div>
            }
          </Modal>
        }


        {/* <label>
            <input
              accept="image/*"
              onChange={this.upload}
              style={{ display: 'none' }}
              multiple={true}
              type="file"
            />
            <Button color="primary" variant="contained" component="span">Добавить</Button>
          </label> */}
        {
          // <Files
          //   files={this.props.mediaFiles}
          //   selected={this.selected}
          // />
        }

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    mediaFiles: getImages(state)
  };
};


const mapDispatchToProps = {
  fetchImages,
  upload,
  deleteImages,
  altImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);
