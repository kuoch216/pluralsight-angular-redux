import { Component } from '@angular/core';

@Component({
    selector: 'app-column',
    templateUrl:'./app-column.component.html'
})

export class AppColumnComponent {
    componentTitle: string = 'Kanban Column';
    _id: number;
    _name:string;

    /**
     * function create new card
     * should instantiate new card class
     */
    // createCard(): void {

    // }

    /**
     * function display created card
     */
    // displayCard(): void {

    // }
}