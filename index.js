let dumy_data = [
    {
        href: "cat_1.jpeg",
        desc: "Cat image"
    },
    {
        href: "dogs.jpeg",
        desc: "Dog image"
    },
    {
        href: "Ai.jpg",
        desc: "Ai image"
    },
    {
        href: "gaming_setup.jpeg",
        desc: "Gaming Pc Images Browse 165,087 Stock Photos, Vectors, and ..."
    },
    {
        href: "macbook.avif",
        desc: "Apple Explains Why It Offers Only 8GB RAM On M3 MacBook Pro That Costs Over A Lakh - News18"
    }
]
const update_image=(href,desc) =>{
    let div_container = document.createElement('div');
    div_container.setAttribute('id', 'image_focus')
    let images = document.createElement('img');
    images.setAttribute('src', href);
    let inputField = document.createElement('textarea');
    inputField.innerHTML=desc;
    div_container.appendChild(images);
    div_container.appendChild(inputField);
    document.getElementById('image_view').append(div_container);
    
}
function checkAndUpdate(random='up'){
    let elem=document.getElementsByClassName('selected-image')[0];
    let targetImageList;
    if(random=='down')
        targetImageList=elem.nextElementSibling;
    else
        targetImageList=elem.previousElementSibling;
        
    if(targetImageList==null)
    return;
    elem.className='image_list';
    targetImageList.className='selected-image';
    let img = targetImageList.closest('.selected-image').querySelector('img');
    let para= targetImageList.closest('.selected-image').querySelector('p');
    let imageView = document.getElementById('image_view');
    let last_img=imageView.querySelector('img');
    last_img.setAttribute('src',img.getAttribute('src'));
    let last_para=imageView.querySelector('textarea');
    last_para.value = para.innerText
}
function getGreeting() {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
        return 'Good Morning';
    } else if (currentTime < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}
const d=document.getElementsByTagName('H1')[0];
d.innerHTML=`${getGreeting()}, Welcome to my Image Viewer`
dumy_data.forEach((val) => {
    let list = document.createElement('div');
    list.setAttribute('class', 'image_list');
    let images = document.createElement('img');
    images.setAttribute('src', val['href']);
    let paragraph = document.createElement('p');
    let text_node = document.createTextNode(val['desc']);
    paragraph.append(text_node);
    list.appendChild(images);
    list.append(paragraph);
    document.getElementById('images').appendChild(list);
});

update_image(dumy_data[0]['href'],dumy_data[0]['desc']);
document.getElementsByClassName('image_list')[0].className='selected-image';
class Menu {
    constructor(elem) {
        this.elem = elem;
        elem.onclick = this.onclick.bind(this);
        elem.oninput = this.oninput.bind(this);
        elem.onkeydown = this.onkeydown.bind(this);
    }
    onkeydown(event){
        if(event.key=='ArrowDown'){
            checkAndUpdate('down');
        }
        if(event.key=='ArrowUp'){
            checkAndUpdate();
        }
    }
    oninput(event){
        let tar = event.target;
        if(tar.tagName!='TEXTAREA'){
            return;
        }
        let select=document.getElementsByClassName('selected-image')[0].querySelector('p');
        select.innerHTML=tar.value;
    }
    onclick(event) {
        let tar = event.target;
        if (!tar.closest('.image_list')) {
            return;
        }
        document.getElementsByClassName('selected-image')[0].className='image_list';
        let targetImageList = tar.closest('.image_list');
        targetImageList.className='selected-image';
        let img = targetImageList.closest('.selected-image').querySelector('img');
        let para= targetImageList.closest('.selected-image').querySelector('p');
        let imageView = document.getElementById('image_view');
        let last_img=imageView.querySelector('img');
        last_img.setAttribute('src',img.getAttribute('src'));
        let last_para=imageView.querySelector('textarea');
        last_para.value = para.innerText
    }
}



let elem=document.querySelector('body');
new Menu(elem);
