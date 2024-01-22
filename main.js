import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


document.querySelector('#app').innerHTML = `
<h1 className="text-3xl font-bold underline">
      Hello world!
</h1>

`

setupCounter(document.querySelector('#counter'))
