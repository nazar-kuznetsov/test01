import React, { Component } from 'react';

class ScrollDialog extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                {
                    this.state.open &&
                   <div>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde possimus magni animi impedit nulla mollitia, tempore dolorum optio aliquid ullam? Magni sint excepturi aperiam cumque unde voluptates at natus. Aliquam?
                   </div>
                }
                <button onClick={this.handleToggle}>Toglle</button>
            </div>
        );
    }
}
export default ScrollDialog;


// import React, {useEffect} from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// const ScrollDialog = ({data, close, deleteImages}) => {
//     const [open, setOpen] = React.useState(false);
//     const [scroll, setScroll] = React.useState('paper');
//     function handleClose() {
//         close(false);
//     }

//     const onDelete = () => {
//         deleteImages(data.path);
//         close(false);
//     };


//     const handleClickOpen = scrollType => () => {
//         setOpen(true);
//         setScroll(scrollType);
//     };

//     function handleClose() {
//         setOpen(false);
//     }

//     return (
//         <div>
//             <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
//             <Dialog
//                 open={open}
//                 fullWidth={true}
//                 maxWidth="xl"
//                 onClose={handleClose}
//                 scroll="paper"
//                 aria-labelledby="scroll-dialog-title"
//             >
//                 <DialogTitle id="scroll-dialog-title">Параметры файлы</DialogTitle>
//                 <DialogContent>
//                     {
//                         data &&
//                         <div style={{display: 'flex'}}>
//                             <img className="dialog-img" src={data.path.replace('../public', '')} alt={data.alt}/>
//                             <div>
//                                 <p>Тип файла: {data.type}</p>
//                                 <p>Загружен: {new Date(data.createdAt).toLocaleString()}</p>
//                                 <p>Размер файла: {data.size}</p>
//                                 <button onClick={onDelete}>Удалить</button>
//                             </div>
//                         </div>
//                     }
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleClose} color="primary">
//                         Subscribe
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// };

// export default ScrollDialog;
