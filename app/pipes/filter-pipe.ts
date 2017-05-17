/**
 * Created by prausa on 5/17/2017.
 */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    'name': 'filter'
})
export class FilterPipe implements PipeTransform {
    public transform(list: any[], filterBy: string, filterValue: String): any {
        if (!filterBy || !filterValue)
            return list;
        return list.filter(item => {
            let field = item[filterBy].toLowerCase();
            let filter = filterValue.toLowerCase();
            return field.indexOf(filter) > -1;
        });
    }
}