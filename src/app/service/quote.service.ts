import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BFF_CONFIG } from '../bff.config';
import { Color } from '../model/color';
import { Quote } from '../model/quote';
import { QuoteItem } from '../model/quoteItem';


@Injectable({
  providedIn: 'root',
})
export class QuoteService {

  constructor(private http: HttpClient) {}

  async getQuotes(): Promise<Array<Quote>> {
    try {
      return await firstValueFrom(
        this.http.get<Quote[]>(`${BFF_CONFIG.BACKEND_URL}/api/quote/get`)
      );
    } catch (error) {
      console.error('Error fetching quotes:', error);
      return [];
    }
  }

  async addQuote(quote: Quote): Promise<Array<Quote>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      return await firstValueFrom(
        this.http.post<Quote[]>(`${BFF_CONFIG.BACKEND_URL}/api/quote/add`, quote, {
          headers,
        })
      );
    } catch (error) {
      console.error('Error adding quote:', error);
      return [];
    }
  }

  async getQuoteItemsByQuoteId(quoteId: number): Promise<Array<QuoteItem>> {
    try {
      return await firstValueFrom(
        this.http.get<QuoteItem[]>(
          `${BFF_CONFIG.BACKEND_URL}/api/quote_item/${quoteId}`
        )
      );
    } catch (error) {
      console.error('Error fetching quote items for quoteId:', quoteId, error);
      return [];
    }
  }

  async addQuoteItem(quoteItem: QuoteItem): Promise<Array<QuoteItem>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      return await firstValueFrom(
        this.http.post<QuoteItem[]>(`${BFF_CONFIG.BACKEND_URL}/api/quote_item/add`, quoteItem, {
          headers,
        })
      );
    } catch (error) {
      console.error('Error adding quote:', error);
      return [];
    }
  }
}
