package com.url.app.urllinkerspringreactjs.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "url")
public class Url {


	@Id
	private String id;
	
	private String shorturl;
	
	private String originalurl;




	public void setOriginalurl(String originalurl) {
		this.originalurl = originalurl;
	}

	public String getOriginalUrl() {
		return originalurl;
	}
}