//Variable containing the HTML skill description element
const skillDesc = document.getElementById('skill-desc')

// Function to set the Skill Description
function setSkillDesc(desc) {
    skillDesc.innerHTML = desc;
}

//List containing all the skill elements
const skills = document.body.getElementsByClassName('skill');

//Set function to HTML & CSS
skills[0].addEventListener('click', function(){
    setSkillDesc("Have been working with HTML & CSS for about a year or two, and have been working professionally with the language for a few months now.");
})
//Set function to Javascript
skills[1].addEventListener('click', function(){
    setSkillDesc("Have been working with Javascript for a year now, and am quite confident with the basic language.");
})
//Set function to Python
skills[2].addEventListener('click', function(){
    setSkillDesc("I started with Python, and would say I'm the most fluent in it. Have worked with it for countless projects.");
})
//Set function to Git and Github
skills[3].addEventListener('click', function(){
    setSkillDesc("Git and Github, a necessary skill, learned it a few months ago.");
})
//Set function to C#
skills[4].addEventListener('click', function(){
    setSkillDesc("Dabbled in C# for a few months, not fluent in it, but know the basics.");
})
//Set function to C++
skills[5].addEventListener('click', function(){
    setSkillDesc("C++ isn't my best skill, but something I have tried to pick up.");
})
//Set function to Java
skills[6].addEventListener('click', function(){
    setSkillDesc("Java, used it back when I wanted to make MC Plugins. Know the basics of it.");
})
//Set function to VS Code
skills[7].addEventListener('click', function(){
    setSkillDesc("My preferred Code Editor, and the one I know the best, though I have tried others.");
})