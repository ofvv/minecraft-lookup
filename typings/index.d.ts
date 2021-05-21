export function status(): Promise<any>;
export function ofCape(username: any): Promise<string>;
export function user(username: any): Promise<object>;
export function skin(username: any): Promise<{
    view: string;
    download: string;
    sideview: string;
}>;
export function head(username: any, size: any): Promise<{
    helmhead: string;
    helmavatar: string;
    headsize: any;
    headowner: any;
    gethead: {
        new: string;
        old: string;
    };
}>;
export function server(ip: any): Promise<{
    servericon: string;
    ip: any;
    port: any;
    debug: {
        ping: any;
        query: any;
        srv: any;
        querymismatch: any;
        ipinsrv: any;
        cnameinsrv: any;
        animatedmotd: any;
        cachetime: any;
        apiversion: any;
    };
    motd: {
        raw: any[];
        clean: any[];
        html: any[];
    };
    players: {
        online: any;
        max: any;
    };
    version: any;
    online: any;
    protocol: any;
    hostname: any;
}>;
export function namemcfriends(namemcuuid: any): Promise<any>;
export function nameHistory(type: string, content: string): Promise<object>;
