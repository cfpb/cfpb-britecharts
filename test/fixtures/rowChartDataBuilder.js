import json4ExpandedBars from '../json/row4ExpandedBars.json';
import json5Bars from '../json/row5Bars.json';
import json5CollapsedBars from '../json/row5CollapsedBars.json';
import jsonColors from '../json/rowColors.json';
import jsonColorsSeparators from '../json/rowColorsSeparators.json';
import jsonColorsSeparatorsNoDelta from '../json/rowColorsSeparatorsNoDelta.json';
import jsonDataLens from '../json/rowFocusLens.json';
import jsonFocusLens from '../json/rowFocusPrintLens.json';
import jsonLetters from '../json/rowDataLetters.json';
import jsonLongNames from '../json/rowLongNames.json';
import jsonMassiveSet from '../json/rowMassiveSetBars.json';


    function RowDataBuilder(config){
        this.Klass = RowDataBuilder;

        this.config = Object.assign({}, config);

        this.withDataLens = function(){
            var attributes = Object.assign({}, this.config, jsonDataLens);

            return new this.Klass(attributes);
        };

        this.withFocusLens = function(){
            var attributes = Object.assign({}, this.config, jsonFocusLens);

            return new this.Klass(attributes);
        };

        this.withLettersFrequency = function(){
            var attributes = Object.assign({}, this.config, jsonLetters);

            return new this.Klass(attributes);
        };

        this.withLongNames = function(){
            var attributes = Object.assign({}, this.config, jsonLongNames);

            return new this.Klass(attributes);
        };

        this.withMassiveSet = function(){
            var attributes = Object.assign({}, this.config, jsonMassiveSet);

            return new this.Klass(attributes);
        };

        this.withColors = function(){
            var attributes = Object.assign({}, this.config, jsonColors);

            return new this.Klass(attributes);
        };
        this.withSeparators = function(){
            var attributes = Object.assign({}, this.config, jsonColorsSeparators);

            return new this.Klass(attributes);
        };

        this.withSeparatorsNoDelta = function(){
            var attributes = Object.assign({}, this.config, jsonColorsSeparatorsNoDelta);

            return new this.Klass(attributes);
        };

        this.with4Bars = function(){
            var attributes = Object.assign({}, this.config, json4ExpandedBars);

            return new this.Klass(attributes);
        };

        this.with5Bars = function(){
            var attributes = Object.assign({}, this.config, json5Bars);

            return new this.Klass(attributes);
        };

        this.with5CollapsedBars = function(){
            var attributes = Object.assign({}, this.config, json5CollapsedBars);

            return new this.Klass(attributes);
        };


        this.build = function() {
            return this.config.data;
        };
    }

export { RowDataBuilder };
export default { RowDataBuilder };
