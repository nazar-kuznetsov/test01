import React from 'react';
import Grid from '@material-ui/core/Grid';
import File from '../file';

export default ({ files, selected }) => {
  return (
    <Grid container={true} spacing={2}>
      {
        files.map((image, index) => {
          return (
            <Grid key={image._id} item={true} xs={2}>
              <File
                image={image}
                selected={selected}
                index={index}
              />
            </Grid>
          );
        })
      }
    </Grid>
  );
};
