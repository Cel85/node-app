< !DOCTYPE html >
    <
    html >
    <
    head >
    <
    meta charset = "utf-8" >
    <
    title > Object - oriented JavaScript example < /title> <
    /head>

    <
    body >
    <
    p > This example requires you to enter commands in your browser 's JavaScript console (see <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">What are browser developer tools</a> for more information).</p>

    <
    /body>

    <
    script >
    const person = {
            name: ['Bob', 'Smith'],
            age: 32,
            gender: 'male',
            interests: ['music', 'skiing'],
            bio: function () {
                alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
            },
            greeting: function () {
                alert('Hi! I\'m ' + this.name[0] + '.');
            }
        } <
        /script> <
        /html>