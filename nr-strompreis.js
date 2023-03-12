module.exports = function(RED) {
    function Reader(config) {
        const axios = require("axios");

        RED.nodes.createNode(this,config);
        const node = this;
        node.api = RED.nodes.getNode(config.api);
        node.meters = null;
        node.on('input', async function(msg) {
            try {
                let zip = "69256";
                if(typeof config.zip !== 'undefined') {
                    zip = config.zip;
                }
                if(typeof msg.payload.zip !== 'undefined') {
                    zip = msg.payload.zip;
                }
                if(msg.payload.length == 5) {
                    zip = msg.payload;
                }
                let res = await axios.get("https://api.corrently.io/v2.0/gsi/marketdata?zip="+zip);
                const now = new Date().getTime();
                let latest = res.data.data[0];
                for(let i=0;i<res.data.data.length;i++) {
                    if((res.data.data[i].start_timestamp <= now) && (res.data.data[i].end_timestamp>=now)) {
                        latest = res.data.data[i];
                    }
                }
                msg.payload = latest;
                node.send(msg);
                node.status({ fill: "green", shape: "dot", text: "Local:"+latest.localprice+" / National:"+latest.marketprice});
            }
           catch(e) {
                node.status({ fill: "red", shape: "dot", text: "Unable to retrieve from API"});
           }
        });
    }
    RED.nodes.registerType("Strompreis",Reader);
}
