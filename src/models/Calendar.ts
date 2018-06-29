import { Property, Required, MaxLength} from "@tsed/common";
import {Description} from "@tsed/swagger";

export class Calendar {
    @Property()
    id: string;

    @Property()
    @Required()
    @MaxLength(100)
    @Description('Name of the calendar')
    name: string;
}