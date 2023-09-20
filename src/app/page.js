import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google'
const mont=Montserrat({
  weight: "400",
  subsets:['latin']
})
const roboto=Roboto({
  weight:'900',
  subsets: ['latin']
  
})

export default function Home() {
  
  console.log(process.env.DATABASEURL)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 style={{fontFamily: "roboto", fontWeight:"300"}}>Hello world</h3>
      <h3 className={mont.className} >Hello world</h3>
    <Image
    src='https://picsum.photos/id/237/200/300'
    width={400}
    height={200}
    />
    </main>
  )
}
