linkLists = document.getElementsByTagName("a")
horizontalScrollableContainers = document.getElementsByClassName("h-scroll-cont")

for (let link of linkLists) {
    link.onclick = (event) => {
        if (link.href == window.location.href) {return};
        event.preventDefault();
        event.stopPropagation();
        alert(`${link.href} does not exist...`)
    }
}
for (let horizontalScrollableContainer of horizontalScrollableContainers) {
    let scrollableBody = horizontalScrollableContainer.getElementsByClassName("scrollable-body")[0];
    let leftScrollButton = horizontalScrollableContainer.getElementsByClassName("sub-main-scroller-left")[0];
    let rightScrollButton = horizontalScrollableContainer.getElementsByClassName("sub-main-scroller-right")[0];

    leftScrollButton.onclick = () => {scrollableBody.scrollBy(-720, 0);}
    rightScrollButton.onclick = () => {scrollableBody.scrollBy(720, 0);}
    scrollableBody.onscroll = () => {
        if (scrollableBody.scrollLeft + scrollableBody.clientWidth + 1 > scrollableBody.scrollWidth) {rightScrollButton.classList.add("scroller-disabled")}
        else {rightScrollButton.classList.remove("scroller-disabled")}
        if (scrollableBody.scrollLeft <= 0) {leftScrollButton.classList.add("scroller-disabled")}
        else {leftScrollButton.classList.remove("scroller-disabled")}
    }
}