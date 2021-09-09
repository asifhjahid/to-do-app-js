let inputText = document.querySelector('#input-text');

let addCourse = document.querySelector('#button');
let enrollCoursesUi = document.querySelector('.enroll-courses-list');
let enrollList = enrollCoursesUi.querySelector('.item');
let completedUiList = document.querySelector('.completed-courses-list')

let updatedCourse = addCourse.addEventListener('click',function(e){
        
        addEnrollCourses(e)
  
        
})

function createCourse(courseName){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = courseName;
    console.log(label.innerText);
     listItem.appendChild(checkBox);
     listItem.appendChild(label)

     return listItem;
    
}

function addEnrollCourses(e){
    e.preventDefault();
    let enrollCourseItem = createCourse(inputText.value);
    enrollCoursesUi.appendChild(enrollCourseItem);
    inputText.value = ''
    
    updatedItems(enrollCourseItem,completedItem)
}

function completedItem(){
    let completeCourseItem = this.parentNode;
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteBtn'
    completeCourseItem.appendChild(deleteButton)
    completeCourseItem.style.display='flex'
    completeCourseItem.style.justifyContent = 'space-between'
    completeCourseItem.style.marginBottom='10px'
    completeCourseItem.style.fontSize='1.2rem'
    // completeCourseItem.style.textTransform='uppercase'
    

    let checkBox = completeCourseItem.querySelector("input[type='checkbox']");
    checkBox.remove();
    completedUiList.appendChild(completeCourseItem);
    completedButton(completeCourseItem,deleteElement)
}

function deleteElement(){
    let completeLiItem = this.parentNode;
    console.log(completeLiItem);
    let ulItems = completeLiItem.parentNode;
    console.log(ulItems);
    ulItems.removeChild(completeLiItem);
}
function updatedItems(completeItem,chcekboxClick){
   let checkBox = completeItem.querySelector("input[type='checkbox']");
   checkBox.onchange = chcekboxClick;
    
}

function completedButton(completeItem,deleteButton){
        let deleteButtonItem = completeItem.querySelector('.deleteBtn');
        deleteButtonItem.onclick = deleteButton;
}

for(let i= 0; i<enrollCoursesUi.children.length ; i++){
  updatedItems(enrollCoursesUi.children[i],completedItem)
    
}
for(let i= 0; i<completedUiList.children.length ; i++){
    completedButton(completedUiList.children[i],deleteElement)
      
  }