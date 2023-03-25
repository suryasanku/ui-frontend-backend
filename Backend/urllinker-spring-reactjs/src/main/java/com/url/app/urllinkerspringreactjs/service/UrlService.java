package com.url.app.urllinkerspringreactjs.service;

import static com.url.app.urllinkerspringreactjs.logic.GenerateShortUrl.getShortUrl;
import static com.url.app.urllinkerspringreactjs.logic.GenerateShortUrl.isUrlValid;

import com.url.app.urllinkerspringreactjs.repository.UrlMongoTemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.url.app.urllinkerspringreactjs.model.Url;


@Service
public class UrlService {
	
	@Autowired
	private UrlMongoTemplateRepository urlRepository;
	
	public String getOriginalUrl(String id) {
		return urlRepository.findByShortUrl(id);
	}
	
	public Url generateShortUrl(String url) {
		System.out.println(url);
		if (!isUrlValid(url)) {
			System.out.println("URL is not valid");
			return null;
		}
		
		Url urlObject = new Url();
		urlObject.setOriginalurl(url);
		urlObject.setShorturl(getShortUrl(url));
		return urlRepository.save(urlObject);
	}
}