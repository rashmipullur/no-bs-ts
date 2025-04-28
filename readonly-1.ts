interface Cat {
    name: string,
    breed: string,
}

function makeCat(name: string, breed: string): Readonly<Cat> {
    return {
        name,
        breed
    }
}

const cat1 = makeCat("George", "Siamese")

function makeCoordinate(x: number, y:number, z:number): readonly [number, number, number] {  
    return [x, y, z]    
}

const c1 = makeCoordinate(10, 20, 30)
// c1[0] = 100 // error

const reallyConst = [1,2,3] as const
// reallyConst[0] = 100 