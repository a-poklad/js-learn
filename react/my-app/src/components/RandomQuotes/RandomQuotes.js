import React from 'react';

class RandomQuotes extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://my.api.mockaroo.com/quotes.json', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd3119830',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
          .then(res => res.json())
          .then(data => {
              this.setState({
                  data: data
              })
          })
          .catch((error) => {
              console.error('Error:', error);
          });
    }


    render() {
        const {data} = this.state;
        console.log(data);
        return <div>
            <h1>Quotes!</h1>
            {
                data.map(item => {
                    return <div>
                        <h2>{item.author_name}</h2>
                        <p>{item.quote}</p>
                    </div>
                })
            }
        </div>
    }
};

export  default RandomQuotes;
