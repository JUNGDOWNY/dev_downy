import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: NextRequest) {
    const jsonDirectory = path.join(process.cwd(), 'app', 'data');
    const filePath = path.join(jsonDirectory, 'goods.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return NextResponse.json(JSON.parse(fileContents));
}