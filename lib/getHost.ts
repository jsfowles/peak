export default (req: { headers: { host: string } }) => {
    if (!req) {
        return '';
    }

    const { host } = req.headers;

    if (host.startsWith('localhost')) {
        return `http://${host}`;
    }
    return `https://${host}`;
};