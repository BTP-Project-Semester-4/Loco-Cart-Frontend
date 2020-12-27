import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from "react-modal";
import { homeObjone } from '../Data'
import './SubcCategoy.css'
import { FaWindowClose } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },  
  media: {
    height: 140,
  },
});

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "400px",
    },
  };
  

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{borderRadius: "50px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent style={{background: "#212e74",textAlign: "center",color: "#fff"}}>
          <Typography gutterBottom variant="h5" component="h2" style = {{textAlign: "center"}}>
            <b>{props.title}</b>
            { /*Should not be grater than 15 characters */}
          </Typography>
          <Typography variant="body2" color="#fff" component="p">
            {/* {props.description} */}
            { "₹ 1000/-"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary" >
            -
        </Button>
        {"Item"}
        <Button size="small" color="primary">
            +
        </Button>
      </CardActions>
    </Card>
  );
}

function ModalMediaCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} style={{margin: "auto",textAlign: "center"}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent style={{background: " #e7dbd3"}}>
            <Typography gutterBottom variant="h5" component="h2" style = {{textAlign: "center"}}>
              {props.title}
              { /*Should not be grater than 15 characters */}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: "flex"}}>
        
          <Button size="small" color="primary" style={{left: "20%"}}>
              <b>-</b>
          </Button> 
          <Button style={{left: "10%"}}>{"Item"}</Button>
          <Button size="small" color="primary" style={{}}>
              <b>+</b>
          </Button>
        
        </CardActions>
      </Card>
    );
  }

export function SubCategories(props){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = "#f00";
    }
    function closeModal() {
        setIsOpen(false);
    }
    var subtitle;
    const category = props.match.params.id;
    if(category === 'Stationery' || category === 'Grocery' || category === 'Electronics'
    || category === 'Footwear' || category === 'Sports' || category === 'Books')
    return(<>
        <div className="All" style={{ width: "95%" }}>
        <div style={{height:"60px", textAlign: "center",marginBottom: "30px"}}><h1><b>Various {props.match.params.id}</b></h1></div>

        <div className="displaycategory">
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory" onClick={openModal} style={{margin: "8px"}}> <MediaCard {... homeObjone}/> </div> 
           
            

        </div>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}> </h2>
        <div style={{ right: 0, top: 0, margin: "20px", position: "fixed" }}>
          <FaWindowClose onClick={closeModal} />
        </div>
        <h1>Product Description</h1>
        <ModalMediaCard {... homeObjone}/>
      </Modal>
        </>
    )
    else{
        return(
            <>
                <h1>Page Not Found</h1>
            </>
        )
    }
}
