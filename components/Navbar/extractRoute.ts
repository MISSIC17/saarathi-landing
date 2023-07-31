export default function extractRoute({ pathname }: { pathname: string }) {
    let s = 0;
    pathname.slice(1,pathname.length).split('').find((letter)=>letter==='/')?.length;
}
