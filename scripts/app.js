
const audioPlayer = document.querySelector('audio')

// const workIt = document.querySelector('#work_it')
// const makeIt = document.querySelector('#make_it')




// const playWorkIt = () => {
   
//     audioPlayer.src = './sounds/work_it.wav'

//     audioPlayer.play()
// }

// const playMakeIt = () => {
   
//     audioPlayer.src = './sounds/make_it.wav'

//     audioPlayer.play()
// }

// workIt.addEventListener('click', playWorkIt)
// makeIt.addEventListener('click', playMakeIt)


const daftSound = [
    {IdObject: "#work_it", soundToPlay: "./sounds/work_it.wav"},
    {IdObject: "#make_it", soundToPlay: "./sounds/make_it.wav"},
    {IdObject: "#do_it", soundToPlay: "./sounds/do_it.wav"},
    {IdObject: "#makes_us", soundToPlay: "./sounds/makes_us.wav"},
    {IdObject: "#harder", soundToPlay: "./sounds/harder.wav"},
    {IdObject: "#better", soundToPlay: "./sounds/better.wav"},
    {IdObject: "#faster", soundToPlay: "./sounds/faster.wav"},
    {IdObject: "#stronger", soundToPlay: "./sounds/stronger.wav"},
    {IdObject: "#more_than", soundToPlay: "./sounds/more_than.wav"},
    {IdObject: "#hour", soundToPlay: "./sounds/hour.wav"},
    {IdObject: "#our", soundToPlay: "./sounds/our.wav"},
    {IdObject: "#never", soundToPlay: "./sounds/never.wav"},
    {IdObject: "#ever", soundToPlay: "./sounds/ever.wav"},
    {IdObject: "#after", soundToPlay: "./sounds/after.wav"},
    {IdObject: "#work_is", soundToPlay: "./sounds/work_is.wav"},
    {IdObject: "#over", soundToPlay: "./sounds/over.wav"}
]

myButton = document.querySelector('#player')

myButton.addEventListener('click', arrayFunction)



function arrayFunction(event) {
    daftSound.forEach((index) => {
        if(myButton === daftSound.idObject) {
            console.log("HELLO")
            audioPlayer.src = daftSound.soundToPlay
            audioPlayer.play()    
        
    console.log(event.target.id)
        }
            console.log(event.target.id);
        })
}

// ("hello")





/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

