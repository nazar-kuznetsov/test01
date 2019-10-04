import React, { Component } from 'react';
// import Upload from '../../modules/upload2';

class News extends Component {
  state = {
    images: []
  }

  save = data => {
    console.log(data);
    this.setState({
      images: [...data]
    });
  }

  render() {
    return (
      <div>123
        {/* <Button color="primary" variant="contained">Опубликовать</Button>
        <TextField
          label="Заголовок"
          type="text"
          fullWidth={true}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Описание"
          margin="normal"
          fullWidth={true}
          variant="outlined"
          placeholder="Введите описание новости"
          multiline={true}
          rows={10}
          rowsMax={10}
        />
        <GridList cellHeight={500} spacing={1}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Галерея</ListSubheader>
          </GridListTile>
          {this.state.images.map(image => (
            <GridListTile className="my" key={image._id}>
              <img src={image.path.replace('../public', '')} alt={image.alt} />
            </GridListTile>
          ))}
        </GridList>
        <Upload
          save={this.save}
        />
        <Upload
          save={this.save}
        /> */}
      </div>
    );
  }
}


export default News;

