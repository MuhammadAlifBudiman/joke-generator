// joke.service.ts - Service for fetching random jokes from an external API
//
// This service uses Angular's dependency injection system and HttpClient to fetch jokes.

import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { Injectable } from '@angular/core'; // Import Injectable decorator for service registration
import { Observable } from 'rxjs'; // Import Observable for handling asynchronous data

/**
 * JokeService provides a method to fetch a random joke from an external API.
 *
 * @Injectable({ providedIn: 'root' })
 *   Registers the service at the root level, making it a singleton throughout the app.
 */
@Injectable({
  providedIn: 'root', // Service is provided at the root level
})
export class JokeService {
  /**
   * The API endpoint for fetching a random joke.
   * @private
   * @type {string}
   */
  private apiUrl: string = 'http://official-joke-api.appspot.com/jokes/random';

  /**
   * Constructor injects HttpClient for making HTTP requests.
   * @param http Angular HttpClient instance
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches a random joke from the API.
   *
   * @returns Observable<{ setup: string; punchline: string }>
   *   An observable emitting an object with 'setup' and 'punchline' properties.
   */
  getRandomJoke(): Observable<{ setup: string; punchline: string }> {
    return this.http.get<{ setup: string; punchline: string }>(this.apiUrl);
  }
}
