// const btnSubmit = document.getElementById('btnSubmit')

// btnSubmit.addEventListener('click', (e) => {
//   e.preventDefault()

//   //Hide spinner
//   showSpinner()

//   //1.5sec delay
//   setTimeout(() => {
//     hideSpinner()
//   }, 1500)
// })

// //Show spinner function
// const showSpinner = () => {
//   document.getElementById('btnSubmitText').style.display = 'none'
//   document.querySelector('.fa-spinner').style.display = 'block'
// }

// //Hide spinner function
// const hideSpinner = () => {
//   document.getElementById('btnSubmitText').style.display = 'block'
//   document.querySelector('.fa-spinner').style.display = 'none'
// }

const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault()

  //Hide the text
  document.getElementById('btnSubmitText').style.display = 'none'

  //Display the spin icon
  document.querySelector('.fa-spinner').style.display = 'block'

  //2 seconds delay
  setTimeout(() => {
    //Show the text after 2 seconds
    document.getElementById('btnSubmitText').style.display = 'block'

    //Hide the spin icon after 2 seconds
    document.querySelector('.fa-spinner').style.display = 'none'
  }, 2000)
})
