

function Fetcher(url) {
    this.fetchData = function(url,success, failure){
        fetch(city)
          .then(function(response){
              return Promise.all([response.status, response.json()])
          })
          .then(function(result){
              if(result[0] !=200){
                  failure(result);
              } else {
                  success(result[1]);
              }
          }).catch(function(error){
              failure(error)
              alert('Ошибка!')
          })
          };
    }

function FiveDayFetcher (success, failure){
    Fetcher.apply(this, arguments)
    const parentFetcher = this.fetchData;
    this.fetchData = function(){
        parentFetcher.call(this,[url,success,failure]);
    }
}
function Transformer (response) {
    this.transform = function () {
        JSON.parse(response)
    }
}
function FiveDayTransformer () {
    Transformer.apply(this, arguments)
    this.transform = function(response){
        return {
            temp: response.list
        };
    }
}
function Renderer () {
    this.renderHeader = function(){}
    this.renderBody = function(){}
    this.renderFooter = function(){}
}
function FiveDayRenderer () {
    Renderer.apply(this,arguments)
    this.renderBody = renderFiveDays
}
const fiveDayTransformer = new FiveDayTransformer();
const fetcher = new FiveDayFetcher();
fetcher.fetchData(function(response){
    const result = fiveDayTransformer.transform(response)
    const renderer = new FiveDayRenderer()
    renderer.renderBody(result)
},function () {})