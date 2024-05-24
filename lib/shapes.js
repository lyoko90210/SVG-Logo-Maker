
class Square{
    constructor(color){
       this.color = color
      
    }

    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Circle{
    constructor(color){
       this.color = color
      
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle{
    constructor(color){
       this.color = color
      
    }

    render(){
        return `<polygon points="100,10 150,190 50,190" fill="${this.color}"/> `
    }
}

module.exports={Square,Circle,Triangle}

// new Square("blue").render()
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <rect x="90" y="40" width="120" height="120" fill="turquoise" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">SVG</text>

// </svg>