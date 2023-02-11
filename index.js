const share = document.getElementById("share");
const imgShare = document.getElementById("img-share");
const tooltip = document.getElementById("tooltip");

const handleMouseover = () => {
  share.style.cssText = "transition: 0.3s; background-color: #6E8098";
  imgShare.style.cssText = "transition: 0.3s; fill: #dfe7f1;";
  tooltip.style.cssText = "transition: 0.3s; opacity: 1;";
};

const handleMouseout = () => {
  share.style.cssText = "transition: 0.3s ; background-color: #DFE7F1";
  imgShare.style.cssText = "transition: 0.3s ; fill: #6E8098";
  tooltip.style.cssText = "transition: 0.3s; opacity: 0;";
};

share.addEventListener("mouseover", handleMouseover);
share.addEventListener("mouseout", handleMouseout);
