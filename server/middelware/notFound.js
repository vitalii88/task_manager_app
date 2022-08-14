const notFound = (req, resp) => resp.status(404).send('Routs dos not exist')

export default notFound;
