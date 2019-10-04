import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { fetchImages, uploadImages } from '../../pages/media/services/action';
import Picture from './picture';


class Gallery extends Component {

  state = {
    selected: []
  }

  componentDidMount() {
    if (this.props.images.length === 0) {
      this.props.fetchImages();
    }
  }

  upload = ({ target }) => {
    const data = new FormData();
    if (target.files.length > 10) {
      return alert('Максимум 10 файлов за 1 раз');
    }
    for (let i = 0; i < target.files.length; i++) {
      data.append('file', target.files[i]);
    }

    this.props.uploadImages(data);
    target.value = null;
  }

  addSelected = id => {
    let selected = [...this.state.selected];

    if (selected.includes(id)) {
      selected = selected.filter(element => element !== id);
    } else {
      selected.push(id);
    }

    this.setState({ selected });

  }

  save = () => {
    // const find = this.props.images.filter(element => this.state.selected.includes(element._id));
    const find = [];
    for (let i = 0; i < this.props.images.length; i++) {
      if (this.state.selected.includes(this.props.images[i]._id)) {
        const a = {...this.props.images[i]};
        a._id += Date.now();
        find.push(a);
      }
    }

    this.props.upload(find);
  }


  render() {
    const { selected } = this.state;
    return (
      <>
        <label>
          <input
            accept="image/*"
            onChange={this.upload}
            style={{ display: 'none' }}
            multiple={true}
            type="file"
          />Загрузить
        </label>
        {selected.length > 0 && <button onClick={this.save}>Сохранить {selected.length}</button>}
        <Grid container={true} spacing={3}>
          {
            this.props.images.map(image => {
              return (
                <Grid key={image._id} item={true} xs={2}>
                  <Picture
                    image={image}
                    addSelected={this.addSelected}
                  />
                </Grid>
              );
            })
          }
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.adminUploadReducer.mediaFiles
  };
};

const mapDispatchToProps = {
  fetchImages,
  uploadImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
