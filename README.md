# Thoughtful AI - Package Sorting

A TypeScript function for dispatching packages to the correct stack based on their volume and mass.

## Rules

**Bulky**: volume ≥ 1,000,000 cm³ OR any dimension ≥ 150 cm
**Heavy**: mass ≥ 20 kg

| Condition | Stack |
|-----------|-------|
| Not bulky and not heavy | STANDARD |
| Bulky or heavy (not both) | SPECIAL |
| Bulky and heavy | REJECTED |

## Usage

```typescript
import { sort } from './src/sort';

sort(10, 10, 10, 5);      // 'STANDARD'
sort(100, 100, 100, 10);  // 'SPECIAL' (bulky)
sort(10, 10, 10, 20);     // 'SPECIAL' (heavy)
sort(150, 10, 10, 25);    // 'REJECTED'
```

## Commands

```bash
npm install     # Install dependencies
npm test        # Run tests
npm run build   # Compile TypeScript
```
