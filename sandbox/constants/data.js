module.exports = (function() {
    return {
        line: {
            basicLine: {
                dataByTopic: [{
                    topicName: 'Shiny',
                    topic: 2,
                    dates: [
                        {value: 1, date: '2015-06-27T00:00:00'},
                        {value: 1, date: '2015-06-28T00:00:00'},
                        {value: 4, date: '2015-06-29T00:00:00'},
                        {value: 2, date: '2015-06-30T00:00:00'},
                        {value: 3, date: '2015-07-01T00:00:00'},
                        {value: 3, date: '2015-07-02T00:00:00'}
                    ]
                }]
            },
            basicMultiLine: {
                dataByTopic: [{
                    topicName: 'Shiny',
                    topic: 2,
                    dates: [
                        {value: 1, date: '2015-06-27T00:00:00'},
                        {value: 1, date: '2015-06-28T00:00:00'},
                        {value: 4, date: '2015-06-29T00:00:00'},
                        {value: 2, date: '2015-06-30T00:00:00'},
                        {value: 3, date: '2015-07-01T00:00:00'},
                        {value: 3, date: '2015-07-02T00:00:00'}
                    ]
                },
                {
                    topicName: 'Blazing',
                    topic: 3,
                    dates: [
                        {value: 5, date: '2015-06-27T00:00:00'},
                        {value: 2, date: '2015-06-28T00:00:00'},
                        {value: 1, date: '2015-06-29T00:00:00'},
                        {value: 3, date: '2015-06-30T00:00:00'},
                        {value: 0, date: '2015-07-01T00:00:00'},
                        {value: 5, date: '2015-07-02T00:00:00'}
                    ]
                },
                {
                    topicName: 'Sparkling',
                    topic: 4,
                    dates: [
                        {value: 2, date: '2015-06-27T00:00:00'},
                        {value: 2, date: '2015-06-28T00:00:00'},
                        {value: 0, date: '2015-06-29T00:00:00'},
                        {value: 5, date: '2015-06-30T00:00:00'},
                        {value: 1, date: '2015-07-01T00:00:00'},
                        {value: 4, date: '2015-07-02T00:00:00'}
                    ]
                },
                {
                    topicName: 'Radiant',
                    topic: 5,
                    dates: [
                        {value: 1, date: '2015-06-27T00:00:00'},
                        {value: 0, date: '2015-06-28T00:00:00'},
                        {value: 1, date: '2015-06-29T00:00:00'},
                        {value: 1, date: '2015-06-30T00:00:00'},
                        {value: 2, date: '2015-07-01T00:00:00'},
                        {value: 3, date: '2015-07-02T00:00:00'}
                    ]
                }]
            }
        },
        'stacked-area': {
            basicStackedArea: [
                { date: '2017-02-16T00:00:00', name: 'Radiant', value: 5 },
                { date: '2017-02-16T00:00:00', name: 'Dazzling', value: 3 },
                { date: '2017-02-17T00:00:00', name: 'Radiant', value: 13 },
                { date: '2017-02-17T00:00:00', name: 'Dazzling', value: 1 },
                { date: '2017-02-18T00:00:00', name: 'Radiant', value: 15 },
                { date: '2017-02-18T00:00:00', name: 'Dazzling', value: 2 },
                { date: '2017-02-19T00:00:00', name: 'Radiant', value: 15 },
                { date: '2017-02-19T00:00:00', name: 'Dazzling', value: 5 },
                { date: '2017-02-20T00:00:00', name: 'Radiant', value: 18 },
                { date: '2017-02-20T00:00:00', name: 'Dazzling', value: 3 }
            ],
            fourStacksArea: [
                { date: '2017-02-16T00:00:00', name: 'Radiant', value: 5 },
                { date: '2017-02-16T00:00:00', name: 'Sparkling', value: 5 },
                { date: '2017-02-16T00:00:00', name: 'Dazzling', value: 2 },
                { date: '2017-02-16T00:00:00', name: 'Luminous', value: 2 },
                { date: '2017-02-17T00:00:00', name: 'Radiant', value: 6 },
                { date: '2017-02-17T00:00:00', name: 'Sparkling', value: 6 },
                { date: '2017-02-17T00:00:00', name: 'Dazzling', value: 3 },
                { date: '2017-02-17T00:00:00', name: 'Luminous', value: 4 },
                { date: '2017-02-18T00:00:00', name: 'Radiant', value: 15 },
                { date: '2017-02-18T00:00:00', name: 'Sparkling', value: 15 },
                { date: '2017-02-18T00:00:00', name: 'Dazzling', value: 5 },
                { date: '2017-02-18T00:00:00', name: 'Luminous', value: 5 },
                { date: '2017-02-19T00:00:00', name: 'Radiant', value: 9 },
                { date: '2017-02-19T00:00:00', name: 'Sparkling', value: 9 },
                { date: '2017-02-19T00:00:00', name: 'Dazzling', value: 4 },
                { date: '2017-02-19T00:00:00', name: 'Luminous', value: 4 },
                { date: '2017-02-20T00:00:00', name: 'Radiant', value: 16 },
                { date: '2017-02-20T00:00:00', name: 'Sparkling', value: 16 },
                { date: '2017-02-20T00:00:00', name: 'Dazzling', value: 3 },
                { date: '2017-02-20T00:00:00', name: 'Luminous', value: 3 }
            ]
        }
    };
}());
