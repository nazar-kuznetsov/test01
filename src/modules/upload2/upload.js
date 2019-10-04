import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { fetchImages } from '../../pages/media/services/action';
import { getImages } from '../../pages/media/services/selectors';
import Grid from '@material-ui/core/Grid';
import { Modal } from '../../components/modal';


const Image = ({ image, add, remove }) => {
  const [select, setSelect] = useState(false);
  const toggleSelect = () => {
    if (select) {
      remove(image);
    } else {
      add(image);
    }
    setSelect(!select);
  };

  return (
    <div
      onClick={toggleSelect}
      className={select ? 'active block' : 'block'}
    >
      <img
        className="upload-image"
        src={image.path.replace('../public', '')}
        alt={image.alt}
      />
    </div>
  );
};


class Upload extends Component {
  state = {
    open: false,
    selected: []
  }

  componentDidMount() {
  }

  open = () => {
    if (this.props.images.length === 0) {
      this.props.fetchImages();
    }
    this.setState({ open: true });
  }

  close = () => this.setState({ open: false });


  add = image => {
    this.setState({
      selected: [image, ...this.state.selected]
    });
  }

remove = () => {
  console.log('удалить');

}

  save = () => {
    this.props.save(this.state.selected);
  }


  render() {
    return (
      <div>
        {this.state.open &&
          <Modal
            title="Добавление изображений в галерею"
            modalClose={this.close}
          >
            <button onClick={this.save}>Сохранить</button>
            <Grid container={true} spacing={2}>
              {
                this.props.images.map(image => {
                  return (
                    <Grid key={image._id} item={true} xs={2}>
                      <Image
                        image={image}
                        add={this.add}
                        remove={this.remove}
                      />
                    </Grid>
                  );
                })
              }
            </Grid>
          </Modal>
        }
        <button onClick={this.open}>Добавить</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: getImages(state)
  };
};

const mapDispatchToProps = {
  fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
