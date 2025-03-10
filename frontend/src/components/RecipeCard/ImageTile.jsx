export default function ImageTile({imageLink}) {
  return imageLink ? 
  <img src={String(imageLink)} alt="Recipe Image"/>: <div className="baux" style={{background: "grey", width:200, height:200, display: "flex", alignItems:"center", justifyContent:"center"}}><span style={{rotate: "-25deg", fontSize:"larger"}}>No Image Available</span></div>
}