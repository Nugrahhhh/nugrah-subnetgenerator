function generateRandomIPAndNetmask() {
    var ip = "";
    for (var i = 0; i < 4; i++) {
        ip += Math.floor(Math.random() * 256);
        if (i < 3) ip += ".";
    }

    var netmask = "/"+(Math.floor(Math.random() * 8) + 24);

    var result = ip + " " + netmask;
    document.getElementById('result').innerHTML = "<p>Generated IP Address with Netmask: " + result + "</p>";
}
