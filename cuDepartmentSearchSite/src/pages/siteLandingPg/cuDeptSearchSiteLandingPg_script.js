class cuPageBase {
    constructor(xHrProps, returnxHr) {
        this.xHrProps = xHrProps;
        this.returnxHr = returnxHr;
    }
    xHr() {
        const xHrReq = new XMLHttpRequest();
        xHrReq.addEventListener('load', this.returnxHr);
        xHrReq.open(this.xHrProps.method, this.xHrProps.url);
        xHrReq.send();
    }
    xHrPromise() {
        return new Promise((resolve, reject) => {
            const xHrReq = new XMLHttpRequest();
            xHrReq.open(this.xHrProps.method, this.xHrProps.url);
            xHrReq.onload = function() {
                if (xHrReq.status >= 200 && xHrReq.status <= 300) {
                    resolve(xHrReq.response)
                } else {
                    reject({
                        status: xHrReq.status,
                        errMsg: xHrReq.statusText
                    });
                }
            };
            xHrReq.onerror = function() {
                reject({
                    status: xHrReq.status,
                    errMsg: xHrReq.statusText
                });
            }
            xHrReq.send();
        });
    }
}

class cuDeptSearchSiteLandingPg extends cuPageBase {

    constructor(xHrProps, returnxHr) {
        super(xHrProps, returnxHr);
    };

    CreateQuickLinks() {
        return new Promise((resolve, reject) => {
            this.xHrPromise().then(
                result => {
                    return JSON.parse(result);
                }
            ).then(
                result => {
                    const arrIcons = result.map(el => {
                        return `
                        <div class="ms-Grid-col ms-sm12 ms-md4">
                            <a href="${el.url}" title="${el.name}">
                                <div class="cuListText">${el.name}</div>
                                <i class="ms-Icon ms-Icon--${el.icon} ms-font-su"></i>
                            </a>
                        </div>
                        `
                    });
                    return arrIcons;
                }
            ).then(
                result => {
                    const finalHtml = `
                            <div class="ms-Grid cuIconContainer" dir="ltr">
                                <div class="ms-Grid-row">
                                    ${result[0]}
                                    ${result[1]}
                                    ${result[2]}
                                </div>
                                <div class="ms-Grid-row">
                                    ${result[3]}
                                    ${result[4]}
                                    ${result[5]}
                                </div>
                            </div>
                        `;
                    resolve(finalHtml)
                }
            ).catch(
                error => reject(error)
            );
        });
    };
}

const xHrProperties = {
    method: 'GET',
    url: 'http://localhost:15120/data'
};

const HRLandingPage = new cuDeptSearchSiteLandingPg(xHrProperties);

HRLandingPage.CreateQuickLinks().then(
    result => {
        document.getElementById('targetEl').innerHTML = result;
    }
);