import jsonAllDatas from '../json/lineDataAllDatas.json';
import jsonFiveTopics from '../json/lineDataFiveTopics.json';
import jsonFourTopics from '../json/lineDataFourTopics.json';
import jsonOneSource from '../json/lineDataOneSet.json';
import jsonAllZeroes from '../json/lineDataAllZeroes.json';
import jsonTwoTopicsFlat from '../json/lineDataTwoTopicsFlat.json';
import jsonMultiMonthValueRange from '../json/multiMonthLineData.json';
import jsonHourDateRange from '../json/lineDataOneSetHourly.json';
import jsonSmallValueRange from '../json/lineDataSmallValueRange.json';
import jsonNegativeValues from '../json/lineDataNegativeValues.json';
import jsonTruncated from '../json/lineDataFiveTopicsTruncated.json';


        function LineDataBuilder(config) {
        this.Klass = LineDataBuilder;

        this.config = Object.assign({}, config);

        this.withTruncatedTopics = function(){
            var attributes = Object.assign({}, this.config, jsonTruncated);

            return new this.Klass(attributes);
        };

        this.with5Topics = function(){
            var attributes = Object.assign({}, this.config, jsonFiveTopics);

            return new this.Klass(attributes);
        };

        this.with4Topics = function(){
            var attributes = Object.assign({}, this.config, jsonFourTopics);

            return new this.Klass(attributes);
        };

        this.withOneSource = function() {
            var attributes = Object.assign({}, this.config, jsonOneSource);

            return new this.Klass(attributes);
        };

        this.withSmallValueRange = function() {
            var attributes = Object.assign({}, this.config, jsonSmallValueRange);

            return new this.Klass(attributes);
        };

        this.withMultiMonthValueRange = function() {
            var attributes = Object.assign({}, this.config, jsonMultiMonthValueRange);

            return new this.Klass(attributes);
        };

        this.withHourDateRange = function() {
            var attributes = Object.assign({}, this.config, jsonHourDateRange);

            return new this.Klass(attributes);
        };

        this.withAllDatas = function() {
            var attributes = Object.assign({}, this.config, jsonAllDatas);

            return new this.Klass(attributes);
        };

        this.withTwoFlatTopics = function() {
            var attributes = Object.assign({}, this.config, jsonTwoTopicsFlat);

            return new this.Klass(attributes);
        };

        this.withAllZeroes = function() {
            var attributes = Object.assign({}, this.config, jsonAllZeroes);

            return new this.Klass(attributes);
        };

        this.withNegativeValues = function() {
            var attributes = Object.assign({}, this.config, jsonNegativeValues);

            return new this.Klass(attributes);
        };

        this.build = function() {
            return this.config;
        };
    }

export { LineDataBuilder };
export default { LineDataBuilder };
