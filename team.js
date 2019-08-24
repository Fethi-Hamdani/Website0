var myBtn = document.getElementById('myButton');

var myHome      = document.getElementById('home'),
    myTeam      = document.getElementById('team'),
    myOurWork   = document.getElementById('ourWork'),
    myContactUs = document.getElementById('contactUs');

onscroll = function()
{
    if(pageYOffset < 720)
    {
        myBtn.style.display = 'none' ;
        myHome.style.textDecoration = 'underline';
        myTeam.style.textDecoration = 'none';
    }
    else
    {
        myBtn.style.display = 'block';
        if(pageYOffset < 1414)
        {
            myHome.style.textDecoration = 'none';
            myTeam.style.textDecoration = 'underline';
            myOurWork.style.textDecoration = 'none';
        }
        else
        {
            if(pageYOffset < 2090)
            {
                myTeam.style.textDecoration = 'none';
                myOurWork.style.textDecoration = 'underline';
                myContactUs.style.textDecoration = 'none';
            }
            else
            {
                myOurWork.style.textDecoration = 'none';
                myContactUs.style.textDecoration = 'underline';
            }
        }
    }
}

myBtn.onclick = function()
{
    scrollTo(0, 0);
}

    /*          Scroll To Links begin       */

myHome.onclick = function()
{
    scrollTo(0, 0);
}

myTeam.onclick = function()
{
    scrollTo(0, 720);
}

myOurWork.onclick = function()
{
    scrollTo(0, 1414);
}

myContactUs.onclick = function()
{
    scrollTo(0, 2090);
}

    /*          Scroll To Links End         */


    /*          Members Animation Begin     */

var myClick      = document.getElementById('clickOn'),
    mySoheyb     = document.getElementById('Soheyb'),
    myAbdelkader = document.getElementById('Abdelkader'),
    myAbdelhadi  = document.getElementById('Abdelhadi'),
    myMohammed   = document.getElementById('Mohammed'),
    myMohamed    = document.getElementById('Mohamed'),
    myAhmed      = document.getElementById('Ahmed'),
    myHouda      = document.getElementById('Houda'),
    myFethi      = document.getElementById('Fethi'),
    myYasmine    = document.getElementById('Yasmine');

myClick.onclick = function()
{
    scrollTo(0, 830);
    mySoheyb.style.transitionDelay = '.6s';
    mySoheyb.style.transform = 'translate(0, -200px)';
    myMohamed.style.transitionDelay = '.4s';
    myMohamed.style.transform = 'translate(-160px, -130px)';
    myYasmine.style.transitionDelay = '.8s';
    myYasmine.style.transform = 'translate(160px, -130px)';
    myMohammed.style.transitionDelay = '.2s';
    myMohammed.style.transform = 'translate(-240px)';
    myAhmed.style.zIndex = '2';
    myFethi.style.transitionDelay = '1s';
    myFethi.style.transform = 'translate(240px)';
    myHouda.style.transitionDelay = '0s';
    myHouda.style.transform = 'translate(-160px, 130px)';
    myAbdelhadi.style.transitionDelay = '1.2s';
    myAbdelhadi.style.transform = 'translate(160px, 130px)';
    myAbdelkader.style.transitionDelay = '1.4s';
    myAbdelkader.style.transform = 'translate(0, 200px)';
}

    /*          Members Animation End       */

    /*          input Field begin           */
var myMessage = document.getElementById('message'),
    mySend    = document.getElementById('send'),
    myName    = document.getElementById('myName'),
    myEmail   = document.getElementById('myEmail');

mySend.onclick = function()
{
    if( !myMessage.value || !myName.value || !myEmail.value )
        alert("Please check your entries!");
    else
    {
        myMessage.value = "";
        myName.value    = "";
        myEmail.value   = "";
        alert("Your Message is well recieved");
    }
        
}

    /*          input Field End         */
