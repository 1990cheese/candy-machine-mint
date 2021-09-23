

document.addEventListener('DOMContentLoaded', function(event) {
    const options = {method: 'GET'};
    // const contractAddress = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB' ONLY FOR TESTING
    // ADDRESS comes from blockchain.hs
    console.log(ADDRESS)
    fetch('https://api.opensea.io/api/v1/assets?asset_contract_address='+ADDRESS+'&order_by=sale_price&order_direction=desc&offset=0&limit=4', options)
      .then(response => response.json())
      .then(response =>{
        var inner = ""
              response['assets'].forEach(function(asset){
            // Might want to add eth price and bid?
          console.log(asset)
          let image = asset['image_url']
          let name = asset['name']
                   let link = asset['permalink']
            // need to fix and clean up for links
            inner += '<div class="test" id="test" data-location="'+link+'"> <div class="base"><a href="'+link+'"target="_blank" rel="noopener noreferrer"><img src="'+image+'" loading="lazy" class="test"></a><div class="div-block-13"><h1 class="heading-7-copy"> 1 of 1 </h1></div></div><div class="div-block-13-copy"><h1 class="heading-6">'+name+'</h1><h1 class="heading-7"> 2.523 ETH </h1></div><div class="div-block-8-copy2"> </div><div class="div-block-13-copy"><div class="div-block-14"><img src="https://uploads-ssl.webflow.com/611c3166df41f00a70599b70/611c7b95d62fd10f5ac0bd33_1688788-200.png" loading="lazy" width="31" alt=""><h1 class="heading-8"> Highest bid </h1><h1 class="heading-9"> 0.01 ETH </h1></div><div class="div-block-14 reverse"><img src="https://uploads-ssl.webflow.com/611c3166df41f00a70599b70/611c7a85cdf855ae6a8e8c7f_hot.png" loading="lazy" width="17" alt=""><h1 class="heading-8"> New bid </h1></div></div></div>' 
        })
        var container = document.getElementById("test")
        container.innerHTML = inner
        })
        .catch(err => console.error(err));
})


