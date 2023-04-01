import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UO7LAITa-MWA4OrrjHVY_PadLyHt0wqwkLUVVdEuYg&usqp=CAU&ec=48665701',
    title: 'Travelling',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_506755198_362244.jpg',
    title: 'Reading Books',
    
  },
  {
    img: 'https://d3i6fh83elv35t.cloudfront.net/static/2019/04/AdobeStock_122719146-1024x683.jpeg',
    title: 'Listening Music',
    
  },
  {
    img: 'https://th.bing.com/th/id/OIP.0teqvh4Db5cg-wO072dpbgHaFk?pid=ImgDet&rs=1',
    title: 'Playing Cricket',
    
    cols: 2,
  },
  {
    img: 'https://cdn.thecoolist.com/wp-content/uploads/2017/03/Cooking-hobbies-for-men-960x639.jpg',
    title: 'Cooking',
    
    cols: 2,
  },
  {
    img: 'https://rwrant.co.za/wp-content/uploads/2019/07/Puzzle-Solving.jpg',
    title: 'Solving Puzzles',
  
  },
];