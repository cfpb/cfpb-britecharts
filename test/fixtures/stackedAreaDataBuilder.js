import jsonHiddenSource from '../json/areaDataHiddenArea.json';
import jsonThreeSources from '../json/areaDataThreeSources.json';
import jsonSixSources from '../json/areaDataSixSources.json';
import jsonSalesChannel from '../json/areaDataSalesChannel.json';
import jsonReportService from '../json/areaDataReportService.json';
import jsonLargeService from '../json/areaDataLarge.json';
import jsonMassiveWeekSource from '../json/areaMassiveWeekSources.json';

    function StackedAreaDataBuilder(config){
        this.Klass = StackedAreaDataBuilder;

        this.config = Object.assign({}, config);

        this.with3Sources = function(){
            var attributes = Object.assign({}, this.config, jsonThreeSources);

            return new this.Klass(attributes);
        };

        this.withHiddenSources = function(){
            var attributes = Object.assign({}, this.config, jsonHiddenSource);

            return new this.Klass(attributes);
        };

        this.with6Sources = function(){
            var attributes = Object.assign({}, this.config, jsonSixSources);

            return new this.Klass(attributes);
        };

        this.withMassiveSources = function(){
            var attributes = Object.assign({}, this.config, jsonMassiveWeekSource);

            return new this.Klass(attributes);
        };


        this.withReportData = function(){
            var attributes = Object.assign({}, this.config, jsonReportService);

            return new this.Klass(attributes);
        };

        this.withSalesChannelData = function(){
            var attributes = Object.assign({}, this.config, jsonSalesChannel);

            return new this.Klass(attributes);
        };

        this.withLargeData = function() {
            var attributes = Object.assign({}, this.config, jsonLargeService);

            return new this.Klass(attributes);
        }

        this.build = function() {
            return this.config;
        };
    }

export { StackedAreaDataBuilder };
export default { StackedAreaDataBuilder };
