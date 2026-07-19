import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App routing', () => {
	it('renders the home route by default', () => {
		render(<App />);
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toBeInTheDocument();
		expect(heading.textContent).not.toBe('');
	});
});
