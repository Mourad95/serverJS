import {
    Controller, Get, PathParams, BodyParams, Post, Status
} from "@tsed/common";
import {Description} from "@tsed/swagger";
import { Calendar } from "../../models/Calendar";

@Controller("/calendars")
export class CalendarCtrl {

    @Get("/:id")
    @Description("Return a calendar resource")
    getCalendarById(@PathParams("id") id: string): Promise<Calendar> {
        return Promise.resolve({
            id,
            name: "Toto"
        });
    }

    @Post("/")
    @Status(201)
    createCalendar(@BodyParams() calendar: Calendar) {
        calendar.id = "zklfhzel";
        return calendar;
    }
}