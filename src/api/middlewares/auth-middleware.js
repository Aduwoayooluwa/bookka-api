export default function didCheck(req, res, next) {
    const { did } = req.headers;

    if (!did) {
        return res.status(401).send('No DID provided');
    }

    // Implementing the check if DID is valid...
    const isDidValid = true; 

    if (!isDidValid) {
        return res.status(403).send('Invalid DID');
    }
    next();
}