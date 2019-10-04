import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Popup from '../../components/popup';
import Gallery from '../../components/gallery';
import { url } from '../../../helpers/constants';

class Categories extends Component {
  state = {
    open: false,
    images: []
  }

  modalOpen = () => {
    this.setState({ open: true });
  }

  modalClose = () => {
    this.setState({ open: false });
  }

  upload = images => {
    this.setState({
      images: [...images, ...this.state.images]
    }, () => this.props.save(this.state.images));

    this.modalClose();
  }


  render() {
    const { open } = this.state;
    return (
      <div>
        {
          open &&
          <Popup
            title="Выберите изображение"
            close={this.modalClose}
          >
            <Gallery
              upload={this.upload}
            />
          </Popup>

          // добавить <Prewie min=1 max=7 title="Добавить фото в галереи"/> drag adn drob
        }
        <Typography variant="subtitle1" component="h2">{this.props.title} {this.props.min > 0 && <span className="required">*</span>}</Typography>
        <Paper style={{minHeight: '300px', margin: '15px 0'}}>
          <Grid className="upload-module" container={true} spacing={2}>
            {
              this.state.images.map(image => {
                return (
                  <Grid key={image._id} item={true} xs={2}>
                    <img src={url(image.path)} alt="" />
                  </Grid>
                );
              })
            }

          </Grid>
        </Paper>
        <Button onClick={this.modalOpen} variant="contained" color="primary">Загрузить
          <CloudUploadIcon />
        </Button>
      </div>
    );
  }
}

export default Categories;
