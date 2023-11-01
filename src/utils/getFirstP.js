function getFirstP(context){
  const paragraphs = context.split("</p>")
  const firstParagraph = paragraphs[0]+'</p>';
  return firstParagraph
}

export default getFirstP