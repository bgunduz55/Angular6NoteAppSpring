import { Component, OnInit } from '@angular/core';
import { HttpMyService } from '../../services/httpService.service';
import { AuthUser } from '../../models/authUser';
import { Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Router } from '@angular/router';
import * as data_json from '../../../assets/globaltext.json';
import { HttpHeaders } from '@angular/common/http';
import { Note } from '../../models/note';

@Component({
    selector: 'app-mainfeed-view',
    templateUrl: './mainFeed.component.html',
    styleUrls: ['./mainFeed.component.scss']

})
export class MainFeedComponent implements OnInit {
    notes: Note[] = new Array<Note>();
    newNote: Note = new Note();
    currentUser: AuthUser = JSON.parse(localStorage.getItem('authUser'));
    header = new HttpHeaders({});
    constructor(private httpService: HttpMyService, private router: Router) {
        this.header.set('Content-Type', 'application/x-www-form-urlencoded');
        this.header = new HttpHeaders({ 'Authorization': this.currentUser.token });
    }
    ngOnInit() {
        this.getNotes();
    }
    getNotes() {
        this.httpService.fetchData(data_json['rest_url'] + '/notes/noteByUsername', { headers: this.header }).subscribe(data => {
            this.notes = data;
        });
    }
    checkIfItemCanSave(item: Note) {
        if (item.oldNote !== item.note) {
            item.canSave = true;
        } else {
            item.canSave = false;
        }
    }
    editItem(item: Note) {
        item.oldNote = item.note;
        item.editing = !item.editing;
        this.checkIfItemCanSave(item);
    }
    saveItem(item: Note, ind: number) {
        item.canSave = false;
        const body = new FormData();
        body.set('id', `${item.id}`);
        body.set('note', `${item.note}`);
        this.httpService.postData(data_json['rest_url'] + '/notes/updateNote', body, { headers: this.header }).subscribe(data => {
            if (data === true) {
                item.editing = !item.editing;
                confirm('Note Updated Successfully');
            } else {
                confirm('Some error happened');
                item.canSave = true;
            }
        });
    }
    saveNewNote() {
        const body = new FormData();
        body.set('note', `${this.newNote.note}`);
        this.httpService.postData(data_json['rest_url'] + '/notes/addNote', body, { headers: this.header }).subscribe(data => {
            if (data === true) {
                this.newNote = new Note();
                confirm('Note Added Successfully');
                this.getNotes();
            } else {
                confirm('Some error happened');
            }
        });
    }
}
