const share = document.getElementById("share");
const imgShare = document.getElementById("img-share");

const handleMouseover = () => {
  share.style.cssText = "transition: 0.3s; background-color: #6E8098";
  imgShare.style.cssText = "transition: 0.3s; fill: #dfe7f1;";
};

const handleMouseout = () => {
  share.style.cssText = "transition: 0.3s ; background-color: #DFE7F1";
  imgShare.style.cssText = "transition: 0.3s ; fill: #6E8098";
};

share.addEventListener("mouseover", handleMouseover);
share.addEventListener("mouseout", handleMouseout);
