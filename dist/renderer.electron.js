if(process.env.LINX_AGENT == 'electron') {
    const ipc = require('electron').ipcRenderer;
    function linxRenderer(){
        ipc.send("startRender")
    }
    linxRenderer();
}