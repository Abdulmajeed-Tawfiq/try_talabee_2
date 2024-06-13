

export interface LinksArrayProps {
    className:string,
    toLink:string,
    text:string
}

export const LinksArray:LinksArrayProps[] = [ 
    {className:"/" ,toLink:"/" ,text:"home"},
    {className:"/about" ,toLink:"/about" ,text:"about"},
    {className:"/privacy" ,toLink:"/privacy" ,text:"Privacy"},
    {className:"/contact" ,toLink:"/contact" ,text:"contact"},
    {className:"/joinFamily" ,toLink:"/joinFamily" ,text:"joinFamily"},
    {className:"/stores" ,toLink:"/stores" ,text:"stores"},
    {className:"/Products" ,toLink:"/Products" ,text:"Products"},
    {className:"/orders" ,toLink:"/orders" ,text:"orders"},
]