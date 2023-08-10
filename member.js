function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 34,
        job: 'Developer',
        skills: ['JavaScript', 'React', 'Node', 'HTML', 'CSS'],
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(this.name + ' knows ' + skill);
            }.bind(this));
        }
    };
    member.showSkills();
}